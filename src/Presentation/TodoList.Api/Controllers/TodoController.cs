using System.Net;
using AutoMapper;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using TodoList.Application.DTOs;
using TodoList.Application.ports.Repositories;
using TodoList.Domain.Entities;

namespace TodoList.Api.Controllers;

[ApiController]
[Route("api/todo")]
public class TodoController : ControllerBase
{
    private readonly ITodoRepository _todoRepository;
    private readonly IMapper _mapper;
    private readonly IValidator<TodoDto> _validator;

    public TodoController(ITodoRepository todoRepository, IMapper mapper, IValidator<TodoDto> validator)
    {
        _todoRepository = todoRepository;
        _mapper = mapper;
        _validator = validator;
    }

    [HttpPost]
    public async Task<IActionResult> PostAsync(TodoDto createTodoDto)
    {
        var validationResult = await _validator.ValidateAsync(createTodoDto);

        if (!validationResult.IsValid)
        {
            return BadRequest(validationResult.Errors);
        }

        var todo = _mapper.Map<Todo>(createTodoDto);
        todo.IsCompleted = false;
        await _todoRepository.CreateAsync(todo);

        return Ok();
    }

    [HttpGet]
    public async Task<IActionResult> GetTodosAsync()
    {
        var todos = await _todoRepository.GetAllAsync();
        var model = _mapper.Map<IEnumerable<Todo>>(todos);
        return Ok(model);
    }

    [HttpGet]
    [Route("{id}")]
    public async Task<IActionResult> GetTodoByIdAsync(int id)
    {
        var todo = await _todoRepository.GetByIdAsync(id);
        if (todo is null)
        {
            return NotFound(new
            {
                result = new
                {
                    message = "Nenhum todo encontrado.",
                    status = HttpStatusCode.NotFound
                }
            });
        }

        var model = _mapper.Map<Todo>(todo);

        return Ok(new
        {
            result = model,
            status = HttpStatusCode.OK
        });
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutAsync(int id, TodoDto updateTodoDto)
    {
        var validationResult = await _validator.ValidateAsync(updateTodoDto);
        if (!validationResult.IsValid)
        {
            return BadRequest(validationResult.Errors);
        }

        var todo = await _todoRepository.GetByIdAsync(id);
        if (todo == null)
        {
            return NotFound(new
            {
                result = new
                {
                    message = "Nenhum todo com o id informado.",
                    status = HttpStatusCode.NotFound
                }
            });
        }

        var todoToUpdate = _mapper.Map<Todo>(updateTodoDto);
        todoToUpdate.Id = id;
        var updated = await _todoRepository.UpdateAsync(todoToUpdate);

        return Ok(updated);
    }

    [HttpDelete]
    [Route("{id}")]
    public async Task<IActionResult> DeleteTodoAsync(int id)
    {
        var deleted = await _todoRepository.DeleteAsync(id);
        if (deleted == 0)
        {
            return NotFound(new
            {
                result = new
                {
                    message = "Nenhum todo encontrado.",
                    status = HttpStatusCode.NotFound
                }
            });
        }

        return Ok();
    }
}