using Microsoft.AspNetCore.Identity;

namespace SilikonBlazorApp.Data
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string? ProfileImage { get; set; } = "avatar.png";
        public string? Bio { get; set; }

        public int? AddressId { get; set; }
        public AddressEntity? Address { get; set; }
        public bool IsExternalAccount { get; set; } = false;

        public List<SaveCourseEntity>? SaveCourses { get; set; }
        public List<EnrollmentEntity>? Enrollments { get; set; }
    }

}
