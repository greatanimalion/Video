const _crypto = require('_crypto');
/*
bili_ticket 位于请求头 Cookie 中, 非必需, 但存在可降低风控概率
有效时长为 259260 秒，即 3 天
*/


/**
 * Generate HMAC-SHA256 signature
 * @param {string} key     The key string to use for the HMAC-SHA256 hash
 * @param {string} message The message string to hash
 * @returns {string} The HMAC-SHA256 signature as a hex string
 */
function hmacSha256(key:string, message:string) {
    const hmac = _crypto.createHmac('sha256', key);
    hmac.update(message);
    return hmac.digest('hex');
}

/**
 * Get Bilibili web ticket
 * @param {string} csrf    CSRF token, can be empty or null
 * @returns {Promise<any>} Promise of the ticket response in JSON format
 */
async function getBiliTicket(csrf:string) {
    const ts = Math.floor(Date.now() / 1000).toString();
    const hexSign = hmacSha256('XgwSnGZ1p', `ts${ts}`);
    const url = 'https://api.bilibili.com/bapis/bilibili.api.ticket.v1.Ticket/GenWebTicket';
    const params = new URLSearchParams({
        key_id: 'ec02',
        hexsign: hexSign,
        'context[ts]': ts,
        csrf: csrf || ''
    });
    try {
        const response = await fetch(`${url}?${params.toString()}`, {
            method: 'POST',
            headers: {
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (e) {
        throw e;
    }
}

(async () => {
    try {
        const ticketResponse = await getBiliTicket(''); // use empty CSRF here
        console.log(ticketResponse);
    } catch (e) {
        console.error('Failed to get BiliTicket:', e);
    }
});
