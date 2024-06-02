using System.ComponentModel.DataAnnotations;

namespace SilikonBlazorApp.Data;

public class SaveCourseEntity
{
    [Key]
    public int Id { get; set; }

    [MaxLength]
    public string UserId { get; set; } = null!;
    public ApplicationUser User { get; set; } = null!;

    public int CourseId { get; set; }
}
