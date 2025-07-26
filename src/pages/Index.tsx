import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import { blogPosts } from "@/data/blog-posts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp, Users } from "lucide-react";

const Index = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="py-section px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-newsletter-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-newsletter-accent/3 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-newsletter-surface-elevated text-newsletter-text-secondary text-sm mb-6">
              <Sparkles className="h-4 w-4 text-newsletter-accent" />
              <span>개발자를 위한 프리미엄 뉴스레터</span>
            </div>
            
            <h1 className="text-hero font-bold text-newsletter-text-primary mb-6 animate-slide-up">
              <span className="text-gradient">Developer</span> Newsletter
            </h1>
            
            <p className="text-xl text-newsletter-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              최신 웹 개발 트렌드와 기술 인사이트를 전달하는 개발자를 위한 뉴스레터입니다. 
              <br className="hidden md:block" />
              실무에 바로 적용할 수 있는 <span className="text-newsletter-accent font-medium">검증된 팁과 노하우</span>를 공유합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/posts">
                <Button className="
                  px-8 py-3 text-lg group
                  bg-newsletter-accent hover:bg-newsletter-accent/90 
                  text-primary-foreground shadow-lg hover:shadow-glow
                  transition-all duration-300
                ">
                  모든 글 탐색하기
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button variant="outline" className="
                  px-8 py-3 text-lg
                  border-newsletter-accent/30 text-newsletter-text-primary
                  hover:bg-newsletter-accent/10 hover:border-newsletter-accent
                  transition-all duration-300
                ">
                  뉴스레터 구독
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-newsletter-accent/10 rounded-full mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-newsletter-accent" />
                </div>
                <div className="text-2xl font-bold text-newsletter-text-primary mb-1">50+</div>
                <div className="text-newsletter-text-secondary text-sm">발행된 아티클</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-newsletter-accent/10 rounded-full mx-auto mb-3">
                  <Users className="h-6 w-6 text-newsletter-accent" />
                </div>
                <div className="text-2xl font-bold text-newsletter-text-primary mb-1">1,200+</div>
                <div className="text-newsletter-text-secondary text-sm">구독자</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-newsletter-accent/10 rounded-full mx-auto mb-3">
                  <Sparkles className="h-6 w-6 text-newsletter-accent" />
                </div>
                <div className="text-2xl font-bold text-newsletter-text-primary mb-1">95%</div>
                <div className="text-newsletter-text-secondary text-sm">만족도</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-component px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-bold text-newsletter-text-primary mb-4">
              최신 아티클
            </h2>
            <p className="text-lg text-newsletter-text-secondary max-w-2xl mx-auto">
              가장 최근에 발행된 개발 관련 글들을 확인하고 최신 트렌드를 놓치지 마세요
            </p>
          </div>
          
          <div className="space-y-6">
            {latestPosts.map((post, index) => (
              <div key={post.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <PostCard post={post} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/posts">
              <Button variant="outline" className="
                px-6 py-3 group
                border-newsletter-accent/30 text-newsletter-accent
                hover:bg-newsletter-accent hover:text-primary-foreground
                transition-all duration-300
              ">
                더 많은 글 보기
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter CTA */}
      <section className="py-component px-4 relative">
        <div className="absolute inset-0 gradient-surface opacity-50"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="bg-newsletter-surface-elevated/80 backdrop-blur-sm rounded-2xl p-8 border border-newsletter-accent/20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-newsletter-accent/10 text-newsletter-accent text-sm mb-6">
              <Sparkles className="h-4 w-4" />
              <span>주간 뉴스레터</span>
            </div>
            
            <h3 className="text-h3 font-bold text-newsletter-text-primary mb-4">
              매주 새로운 인사이트를 받아보세요
            </h3>
            <p className="text-newsletter-text-secondary mb-8 leading-relaxed">
              개발 트렌드, 실무 팁, 커리어 조언까지 - 개발자 성장에 필요한 모든 것을 
              <br className="hidden md:block" />
              매주 목요일 오전 9시에 정리해서 전달해드립니다.
            </p>
            
            <Link to="/contact">
              <Button className="
                px-8 py-3 text-lg group
                bg-newsletter-accent hover:bg-newsletter-accent/90
                text-primary-foreground shadow-lg hover:shadow-glow
                transition-all duration-300
              ">
                무료로 구독하기
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
