import { test, expect } from '@playwright/test';
import { TestPagesFormPage } from '../support/pages/TestPagesFormPage';

test.describe('ZeroStep AI Form Scenarios', () => {
  
  test('Cenário 1', async ({ page }) => {
    const formPage = new TestPagesFormPage(page);
    await formPage.navigate();

    await formPage.fillForm(
      'usuario123',
      'senha123',
      'Comentário de teste 1',
      ['cb1', 'cb3'],
      'rd1',
      ['ms2', 'ms4'],
      'dd2'
    );

    await formPage.submitForm();
    await expect(page).toHaveURL(/submit/);
  });

  test('Cenário 2', async ({ page }) => {
    const formPage = new TestPagesFormPage(page);
    await formPage.navigate();

    await formPage.fillForm(
      'joao456',
      'senha456',
      'Comentário de teste 2',
      ['cb2'],
      'rd3',
      ['ms1', 'ms3'],
      'dd4'
    );

    await formPage.submitForm();
    await expect(page).toHaveURL(/submit/);
  });

  test('Cenário 3', async ({ page }) => {
    const formPage = new TestPagesFormPage(page);
    await formPage.navigate();

    await formPage.fillForm(
      'maria789',
      'senha789',
      'Comentário de teste 3',
      [],
      'rd2',
      ['ms4'],
      'dd3'
    );

    await formPage.submitForm();
    await expect(page).toHaveURL(/submit/);
  });

});
