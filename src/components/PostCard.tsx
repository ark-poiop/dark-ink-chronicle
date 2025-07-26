import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { BlogPost, categories } from "@/data/blog-posts";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

interface PostCardProps {
  post: BlogPost;
}

const PostCard = ({ post }: PostCardProps) => {
  const categoryInfo = categories.find(cat => cat.id === post.category);

  return (
    <Link to={`/posts/${post.id}`} className="group block animate-fade-in">
      <Card className="
        post-card-hover
        bg-newsletter-surface 
        border border-border 
        hover:border-newsletter-accent/30
        overflow-hidden
        group-hover:shadow-glow
      ">
        <CardContent className="p-0">
          {/* Horizontal Layout */}
          <div className="md:flex">
            {/* Content Section */}
            <div className="flex-1 p-6">
              {/* Category & Meta */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  {categoryInfo && (
                    <span className={`
                      category-pill ${categoryInfo.color} text-white text-xs
                    `}>
                      {categoryInfo.name}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs text-newsletter-text-muted">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="
                text-xl font-bold text-newsletter-text-primary mb-3
                group-hover:text-gradient transition-all duration-300
                line-clamp-2 leading-tight
              ">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="
                text-newsletter-text-secondary mb-4
                line-clamp-3 leading-relaxed
              ">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="
                    px-2 py-1 text-xs rounded
                    bg-newsletter-surface-elevated 
                    text-newsletter-text-muted
                  ">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-newsletter-text-secondary">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="
                  flex items-center gap-2 text-newsletter-accent
                  text-sm font-medium group-hover:gap-3 transition-all duration-200
                ">
                  <span>자세히 보기</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </div>

            {/* Visual Element - 우측 장식 */}
            <div className="
              hidden md:block w-2 
              bg-gradient-to-b from-newsletter-accent/20 to-newsletter-accent/5
              group-hover:from-newsletter-accent/40 group-hover:to-newsletter-accent/10
              transition-all duration-300
            "></div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PostCard;