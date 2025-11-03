import { test, expect } from '@playwright/test';
import { TestPagesFormPage } from '../support/pages/TestPagesFormPage';

test.describe('ZeroStep AI Form Scenario', () => {
  test('preenche formulário com ZeroStep AI', async ({ page }) => {
    const formPage = new TestPagesFormPage(page);
    
    await formPage.navigate();

    const aiGeneratedName = 'João da Silva';
    const aiGeneratedComment = 'Comentário gerado automaticamente pelo ZeroStep AI';

    await formPage.fillForm(aiGeneratedName, aiGeneratedComment);
    await formPage.selectCheckbox('checkbox1'); 
    await formPage.submit();


    const result = await formPage.getSubmissionResult();
    expect(result).toContain('Form successfully submitted');
  });
});
