using FluentValidation;
using TodoList.Application.DTOs.Tag;

namespace TodoList.Application.Validators.Tag;

public class TagDToValidator : AbstractValidator<CreateTagDTo>
{
    public TagDToValidator()
    {
        RuleFor(x => x.Name)
            .NotEmpty().WithMessage("O Nome é obrigatório.")
            .MaximumLength(100).WithMessage("O Nome deve ter no máximo 100 caracteres.");
        RuleFor(x => x.Description)
            .NotEmpty().WithMessage("A Descrição é obrigatória.")
            .MaximumLength(500).WithMessage("A Descrição deve ter no máximo 500 caracteres.");
        RuleFor(x => x.Active)
            .InclusiveBetween(0, 1).WithMessage("O Campo Ativo deve ser 0 (inativo) ou 1 (ativo).");
    }
}

