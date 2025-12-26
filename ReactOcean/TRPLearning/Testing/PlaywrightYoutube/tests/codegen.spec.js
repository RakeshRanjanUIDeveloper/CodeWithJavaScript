import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dplaywright%26oq%3Dplaywright%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDI5MjNqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3D4L4xafHwJtKX0-kP2KPK-Q0&q=EgQxz-FOGOH9xskGIjBvZg0Of2W0ykRODFUcz-usxAlmR73pw-H_skNPcL15dU3iuxunxKxcV6tjV32NITwyAVJaAUM');
  await page1.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Daajtak%26oq%3Daajtak%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDMwNTZqMGoxqAIAsAIA%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DF78xafueA9_g0-kPktPU0Qs&q=EgQxz-FOGJf-xskGIjAFZVxlzkVVwNx3mRtWE9igA1BnWx0MvwgnhPHyGYxLkTUIcsVzXtAAbk4bZ8JVlroyAVJaAUM');
});