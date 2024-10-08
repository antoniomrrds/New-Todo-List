using TodoList.Application.DTOs;
using FluentValidation;

namespace TodoList.Application.Validators;

public class TodoDtoValidator : AbstractValidator<TodoDto>
{
    public TodoDtoValidator()
    {
        RuleFor(x => x.Title)
            .NotEmpty().WithMessage("O título é obrigatório.")
            .MaximumLength(100).WithMessage("O título deve ter no máximo 100 caracteres.");

        RuleFor(x => x.Description)
            .NotEmpty().WithMessage("A descrição é obrigatória.")
            .MaximumLength(500).WithMessage("A descrição deve ter no máximo 500 caracteres.");
        
        RuleFor(x => x.IsCompleted)
            .NotNull().WithMessage("O campo IsCompleted é obrigatório e deve ser um valor booleano.")
            .Must(value => value == true || value == false)
            .WithMessage("O campo IsCompleted deve ser 'true' ou 'false'.");
    }
}