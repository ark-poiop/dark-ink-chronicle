import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import { blogPosts } from "@/data/blog-posts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-section px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-hero font-bold text-newsletter-text-primary mb-6">
            Developer Newsletter
          </h1>
          <p className="text-xl text-newsletter-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            최신 웹 개발 트렌드와 기술 인사이트를 전달하는 개발자를 위한 뉴스레터입니다. 
            실무에 바로 적용할 수 있는 팁과 노하우를 공유합니다.
          </p>
          <Link to="/posts">
            <Button className="bg-newsletter-accent hover:bg-newsletter-accent/90 text-primary-foreground px-8 py-3 text-lg">
              모든 글 보기
            </Button>
          </Link>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-component px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="text-h2 font-bold text-newsletter-text-primary mb-2">
              최신 글
            </h2>
            <p className="text-newsletter-text-secondary">
              가장 최근에 발행된 개발 관련 글들을 확인해보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-component px-4 bg-newsletter-surface">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-h3 font-bold text-newsletter-text-primary mb-4">
            뉴스레터 구독하기
          </h3>
          <p className="text-newsletter-text-secondary mb-6">
            매주 새로운 개발 인사이트와 트렌드를 이메일로 받아보세요
          </p>
          <Link to="/contact">
            <Button variant="outline" className="border-newsletter-accent text-newsletter-accent hover:bg-newsletter-accent hover:text-primary-foreground">
              구독 신청
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
