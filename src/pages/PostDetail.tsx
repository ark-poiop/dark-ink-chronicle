import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { blogPosts } from "@/data/blog-posts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto max-w-4xl px-4 py-section text-center">
          <h1 className="text-h1 font-bold text-newsletter-text-primary mb-4">
            글을 찾을 수 없습니다
          </h1>
          <p className="text-newsletter-text-secondary mb-8">
            요청하신 글이 존재하지 않거나 삭제되었을 수 있습니다.
          </p>
          <Link to="/posts">
            <Button className="bg-newsletter-accent hover:bg-newsletter-accent/90">
              전체 글 보기
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="container mx-auto max-w-4xl px-4 py-section">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/posts">
            <Button 
              variant="ghost" 
              className="text-newsletter-text-secondary hover:text-newsletter-text-primary hover:bg-newsletter-surface-elevated"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              전체 글로 돌아가기
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-h1 font-bold text-newsletter-text-primary mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-newsletter-text-secondary mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Excerpt */}
          <div className="bg-newsletter-surface border-l-4 border-newsletter-accent p-6 rounded-r-lg">
            <p className="text-lg text-newsletter-text-secondary leading-relaxed italic">
              {post.excerpt}
            </p>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none">
          <div 
            className="
              text-newsletter-text-primary 
              leading-relaxed
              [&>h1]:text-h2 [&>h1]:font-bold [&>h1]:text-newsletter-text-primary [&>h1]:mt-8 [&>h1]:mb-4
              [&>h2]:text-h3 [&>h2]:font-semibold [&>h2]:text-newsletter-text-primary [&>h2]:mt-6 [&>h2]:mb-3
              [&>h3]:text-xl [&>h3]:font-medium [&>h3]:text-newsletter-text-primary [&>h3]:mt-4 [&>h3]:mb-2
              [&>p]:text-newsletter-text-secondary [&>p]:mb-4 [&>p]:leading-relaxed
              [&>ul]:text-newsletter-text-secondary [&>ul]:mb-4 [&>ul]:pl-6
              [&>ol]:text-newsletter-text-secondary [&>ol]:mb-4 [&>ol]:pl-6
              [&>li]:mb-2
              [&>blockquote]:border-l-4 [&>blockquote]:border-newsletter-accent [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-6 [&>blockquote]:bg-newsletter-surface [&>blockquote]:rounded-r-lg
              [&>pre]:bg-newsletter-surface-elevated [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:mb-4
              [&>code]:bg-newsletter-surface-elevated [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-newsletter-accent
              [&>pre>code]:bg-transparent [&>pre>code]:p-0
            "
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .replace(/\n/g, '<br>')
                .replace(/#{1}\s/g, '<h1>')
                .replace(/<br><h1>/g, '<h1>')
                .replace(/<h1>(.+?)(<br>|$)/g, '<h1>$1</h1>')
                .replace(/#{2}\s/g, '<h2>')
                .replace(/<br><h2>/g, '<h2>')
                .replace(/<h2>(.+?)(<br>|$)/g, '<h2>$1</h2>')
                .replace(/#{3}\s/g, '<h3>')
                .replace(/<br><h3>/g, '<h3>')
                .replace(/<h3>(.+?)(<br>|$)/g, '<h3>$1</h3>')
                .replace(/```(\w+)?<br>/g, '<pre><code>')
                .replace(/```/g, '</code></pre>')
                .replace(/`([^`]+)`/g, '<code>$1</code>')
            }}
          />
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-newsletter-text-secondary">
                이 글이 도움이 되셨나요? 더 많은 개발 인사이트를 받아보세요.
              </p>
            </div>
            <Link to="/contact">
              <Button className="bg-newsletter-accent hover:bg-newsletter-accent/90">
                뉴스레터 구독
              </Button>
            </Link>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default PostDetail;