import { log } from 'node:console'
import { createHash } from 'node:crypto'

type Params = Record<string, any>

const md5 = (str: string) => createHash('md5').update(str).digest('hex')

export function appSign(params: Params, appkey: string, appsec: string) {
    params.appkey = appkey
    const searchParams = new URLSearchParams(params)
    searchParams.sort();
    return md5(searchParams.toString() + appsec)
}

