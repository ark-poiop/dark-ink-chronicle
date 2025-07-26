import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-newsletter-accent rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">N</span>
          </div>
          <span className="font-bold text-xl text-newsletter-text-primary">
            Newsletter
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Link to="/about">
            <Button 
              variant={isActive("/about") ? "default" : "ghost"}
              className={`
                transition-colors duration-200
                ${isActive("/about") 
                  ? "bg-newsletter-accent text-primary-foreground" 
                  : "text-newsletter-text-secondary hover:text-newsletter-text-primary hover:bg-newsletter-surface-elevated"
                }
              `}
            >
              About
            </Button>
          </Link>
          
          <Link to="/posts">
            <Button 
              variant={isActive("/posts") ? "default" : "ghost"}
              className={`
                transition-colors duration-200
                ${isActive("/posts") 
                  ? "bg-newsletter-accent text-primary-foreground" 
                  : "text-newsletter-text-secondary hover:text-newsletter-text-primary hover:bg-newsletter-surface-elevated"
                }
              `}
            >
              Posts
            </Button>
          </Link>
          
          <Link to="/contact">
            <Button 
              variant={isActive("/contact") ? "default" : "ghost"}
              className={`
                transition-colors duration-200
                ${isActive("/contact") 
                  ? "bg-newsletter-accent text-primary-foreground" 
                  : "text-newsletter-text-secondary hover:text-newsletter-text-primary hover:bg-newsletter-surface-elevated"
                }
              `}
            >
              Contact
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;