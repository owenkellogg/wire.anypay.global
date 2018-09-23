import {sendWire} from '../../lib';

describe("Sending A Wire", () => {

  it("should create a wire record with the status 'created'", async () => {

    const anypayEmail = 'sorlosk@autofair.com';

    const invoiceUid = '5883ce96-79ec-4baa-b2cb-77dafa840df2';

    let wire = await sendWire(anypayEmail, invoiceUid);

    assert.strictEqual(record.status, 'created');

  });

});
