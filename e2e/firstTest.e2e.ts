import {by, element, expect} from 'detox';
/**
 * COVID Care Section - COVID-19 Records
 * @link https://app.qase.io/project/IHMOB?suite=69
 *
 * @group covid
 * @group crucial-ios
 */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have "Step One" section', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });
});
