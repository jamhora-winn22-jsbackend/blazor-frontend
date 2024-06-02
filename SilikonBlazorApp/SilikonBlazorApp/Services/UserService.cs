using Microsoft.AspNetCore.Identity;
using SilikonBlazorApp.Data;

namespace SilikonBlazorApp.Services;

public class UserService(UserManager<ApplicationUser> userManager)
{
    private readonly UserManager<ApplicationUser> _userManager = userManager;

    public async Task<ApplicationUser> GetUserAsync(string userId)
    {
        return await _userManager.FindByIdAsync(userId);
    }
}
