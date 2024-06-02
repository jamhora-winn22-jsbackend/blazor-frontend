using System.ComponentModel.DataAnnotations;
namespace SilikonBlazorApp.Filters;

public class CheckboxRequierd : ValidationAttribute
{
    public override bool IsValid(object? value) => value is bool b && b;
}
