namespace SilikonBlazorApp.Services;

public class CookieService(IHttpContextAccessor httpContextAccessor)
{
    private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;

    public string GetCookie(string key)
    {
        return _httpContextAccessor.HttpContext?.Request.Cookies[key];
    }
}