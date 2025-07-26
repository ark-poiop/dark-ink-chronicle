import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BlogPost } from "@/data/blog-posts";

interface PostCardProps {
  post: BlogPost;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <Card className="
        bg-newsletter-surface 
        border-border 
        hover:bg-newsletter-surface-elevated 
        transition-colors 
        duration-200 
        cursor-pointer
        group
      ">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between text-sm text-newsletter-text-secondary mb-2">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="
            text-xl 
            font-semibold 
            text-newsletter-text-primary 
            group-hover:text-newsletter-accent 
            transition-colors 
            duration-200
            line-clamp-2
          ">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="
            text-newsletter-text-secondary 
            line-clamp-3 
            leading-relaxed
          ">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-newsletter-text-secondary">
              by {post.author}
            </span>
            <span className="
              text-newsletter-accent 
              text-sm 
              font-medium
              group-hover:underline
            ">
              Read more →
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PostCard;