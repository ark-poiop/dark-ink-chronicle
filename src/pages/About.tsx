import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto max-w-4xl px-4 py-section">
        {/* Hero Section */}
        <section className="text-center mb-component">
          <h1 className="text-h1 font-bold text-newsletter-text-primary mb-6">
            About Developer Newsletter
          </h1>
          <p className="text-xl text-newsletter-text-secondary leading-relaxed max-w-3xl mx-auto">
            개발자들을 위한 실용적이고 깊이 있는 콘텐츠를 제공하는 뉴스레터입니다. 
            최신 기술 트렌드부터 실무 노하우까지, 개발 여정에 도움이 되는 인사이트를 전달합니다.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8 mb-component">
          <Card className="bg-newsletter-surface border-border">
            <CardHeader>
              <CardTitle className="text-newsletter-text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-newsletter-text-secondary leading-relaxed">
                복잡한 기술을 쉽게 이해할 수 있도록 설명하고, 실무에서 바로 적용할 수 있는 
                실용적인 지식을 공유합니다. 개발자들의 성장과 커리어 발전에 기여하는 것이 우리의 목표입니다.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-newsletter-surface border-border">
            <CardHeader>
              <CardTitle className="text-newsletter-text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-newsletter-text-secondary leading-relaxed">
                한국 개발자 커뮤니티에서 가장 신뢰받는 기술 정보원이 되어, 
                개발자들이 더 나은 코드를 작성하고 더 나은 제품을 만들 수 있도록 돕겠습니다.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* What We Cover */}
        <section className="mb-component">
          <h2 className="text-h2 font-bold text-newsletter-text-primary mb-8 text-center">
            다루는 주제들
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-newsletter-surface rounded-lg border border-border">
              <div className="w-12 h-12 bg-newsletter-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground text-xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-newsletter-text-primary mb-2">
                최신 기술 트렌드
              </h3>
              <p className="text-newsletter-text-secondary text-sm">
                React, TypeScript, Next.js 등 최신 웹 기술의 동향과 업데이트
              </p>
            </div>

            <div className="text-center p-6 bg-newsletter-surface rounded-lg border border-border">
              <div className="w-12 h-12 bg-newsletter-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground text-xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-newsletter-text-primary mb-2">
                실무 베스트 프랙티스
              </h3>
              <p className="text-newsletter-text-secondary text-sm">
                실제 프로젝트에서 검증된 코딩 패턴과 아키텍처 설계 방법
              </p>
            </div>

            <div className="text-center p-6 bg-newsletter-surface rounded-lg border border-border">
              <div className="w-12 h-12 bg-newsletter-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-newsletter-text-primary mb-2">
                성능 최적화
              </h3>
              <p className="text-newsletter-text-secondary text-sm">
                웹 애플리케이션 성능 향상을 위한 구체적인 기법과 도구들
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-newsletter-surface-elevated rounded-lg p-8 border border-border">
          <h2 className="text-h2 font-bold text-newsletter-text-primary mb-8 text-center">
            Newsletter Stats
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-newsletter-accent mb-2">50+</div>
              <div className="text-newsletter-text-secondary">발행된 글</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-newsletter-accent mb-2">1,200+</div>
              <div className="text-newsletter-text-secondary">구독자</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-newsletter-accent mb-2">95%</div>
              <div className="text-newsletter-text-secondary">구독자 만족도</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;