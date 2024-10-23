import { expect, test } from "vitest"
import { appSign } from "../verify/crypto"
test("crypto test", () => {
    expect(appSign(
        {
            id: 114514,
            str: '1919810',
            test: 'いいよ，こいよ',
        },
        '1d8b6e7d45233436',
        '560c52ccd288fed045859ed18bffd973',
    )).toBe('01479cf20504d865519ac50f33ba3a7d')
})