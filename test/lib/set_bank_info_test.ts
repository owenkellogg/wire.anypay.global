import * as assert from 'assert';

import {setBankInfo} from '.././lib';

describe("Setting Bank Info For Anypay Account", () => {

  it("#setbankinfo should set for an anypay account", async () => {

    let accountEmail = 'sorlosk@autofair.com';

    let bankInfo = {

      bank_name: 'Citizens Bank',

      street_address: '20 North Park Avenue MA-670',

      city: 'Plymouth',

      state: 'MA',

      zip: 02360,

      account: 1321111387,

      aba: 011500120

    });

    let record = await setBankInfo(accountEmail, bankInfo);

    assert.strictEqual(record.street_address, bankInfo.street_address);

  });

});
