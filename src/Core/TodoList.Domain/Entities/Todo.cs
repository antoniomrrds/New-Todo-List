using TodoList.Domain.Constants;
using TodoList.Domain.Enums;
using TodoList.Domain.extensions;

namespace TodoList.Domain.Entities;

public interface ITodo
{
    string Title { get; set; }
    string Description { get; set; }
    CompletionStatus IsCompleted { get; set; }
    DateTime? ExpirationDate { get; set; }
    ActivationState Active { get; set; }
}

public sealed class Todo : BaseEntity , ITodo
{
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public CompletionStatus IsCompleted { get; set; }
    public ActivationState Active { get; set; }
    public string StatusDescription => Status.GetName();
    public TodoStatus Status { get; set; }
    public DateTime? ExpirationDate { get; set; }
    public string? ExpirationDateFormatted { get;  init; }
    public string? CreatedAtFormatted { get;  init; }
   public bool IsExpirationDateValid  => ExpirationDate.HasValue && ExpirationDate.Value < DateTime.UtcNow;
    public string? UpdatedAtFormatted { get;  init; }
}
