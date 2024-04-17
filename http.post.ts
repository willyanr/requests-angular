import { FinancialService } from '';
import { modelCategory } from '';

class httpPost {
  constructor(private FinancialService: FinancialService) { }

  createCategoryMenu() {
    const newCategory: modelCategory = {
      id: this.id,
      name: this.inputName
    };
    this.FinancialService.createCategory(newCategory).subscribe({
      next: _ => {
        // Success
        this.feedBack = 'Categoria criada com sucesso!';
        this.alertSuccess = true;
        this.closeModal();
        this.getCategory();
        setTimeout(() => {
          this.alertSuccess = false;
        }, 4000);
      },
      error: _ => {
        // Error
        this.feedBack = 'Ocorreu um erro ao criar a categoria';
        this.alertError = true;
        this.closeModal();
        setTimeout(() => {
          this.alertError = false;
        }, 4000);
      }
    });
  }
}