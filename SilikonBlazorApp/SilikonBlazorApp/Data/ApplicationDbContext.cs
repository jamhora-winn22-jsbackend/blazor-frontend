using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace SilikonBlazorApp.Data
{
    public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : IdentityDbContext<ApplicationUser>(options)
    {
        public DbSet<AddressEntity> Addresses { get; set; }
        public DbSet<SaveCourseEntity> SaveCourses { get; set; }
        public DbSet<EnrollmentEntity> Enrollments { get; set; }
    }
}
