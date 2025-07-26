import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 실제 구현에서는 여기서 서버로 데이터를 전송
    console.log("Form submitted:", formData);
    
    toast({
      title: "메시지가 전송되었습니다!",
      description: "빠른 시일 내에 답변드리겠습니다.",
    });

    // 폼 초기화
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto max-w-6xl px-4 py-section">
        {/* Page Header */}
        <section className="text-center mb-component">
          <h1 className="text-h1 font-bold text-newsletter-text-primary mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-newsletter-text-secondary max-w-2xl mx-auto">
            질문이나 제안사항이 있으시면 언제든 연락주세요. 
            뉴스레터 구독 신청도 아래 폼을 통해 가능합니다.
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <Card className="bg-newsletter-surface border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-newsletter-text-primary">
                    <Mail className="h-5 w-5 text-newsletter-accent" />
                    뉴스레터 구독
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-newsletter-text-secondary text-sm leading-relaxed">
                    매주 새로운 개발 인사이트와 트렌드를 이메일로 받아보세요. 
                    실무에 도움되는 팁과 노하우를 전달해드립니다.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-newsletter-surface border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-newsletter-text-primary">
                    <MessageSquare className="h-5 w-5 text-newsletter-accent" />
                    피드백 & 제안
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-newsletter-text-secondary text-sm leading-relaxed">
                    더 나은 콘텐츠를 위한 여러분의 의견을 들려주세요. 
                    다루었으면 하는 주제나 개선사항을 제안해주시면 반영하도록 하겠습니다.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-newsletter-surface border-border">
                <CardHeader>
                  <CardTitle className="text-newsletter-text-primary">
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-newsletter-text-secondary text-sm">
                    보통 24-48시간 내에 답변드립니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-newsletter-surface border-border">
              <CardHeader>
                <CardTitle className="text-newsletter-text-primary">
                  메시지 보내기
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-newsletter-text-primary">
                        이름 *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="
                          mt-1 
                          bg-newsletter-surface-elevated 
                          border-border 
                          text-newsletter-text-primary 
                          placeholder:text-newsletter-text-secondary
                          focus:border-newsletter-accent
                          focus:ring-newsletter-accent
                        "
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-newsletter-text-primary">
                        이메일 *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="
                          mt-1 
                          bg-newsletter-surface-elevated 
                          border-border 
                          text-newsletter-text-primary 
                          placeholder:text-newsletter-text-secondary
                          focus:border-newsletter-accent
                          focus:ring-newsletter-accent
                        "
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-newsletter-text-primary">
                      제목 *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="
                        mt-1 
                        bg-newsletter-surface-elevated 
                        border-border 
                        text-newsletter-text-primary 
                        placeholder:text-newsletter-text-secondary
                        focus:border-newsletter-accent
                        focus:ring-newsletter-accent
                      "
                      placeholder="뉴스레터 구독 신청 또는 문의사항"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-newsletter-text-primary">
                      메시지 *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="
                        mt-1 
                        bg-newsletter-surface-elevated 
                        border-border 
                        text-newsletter-text-primary 
                        placeholder:text-newsletter-text-secondary
                        focus:border-newsletter-accent
                        focus:ring-newsletter-accent
                        resize-none
                      "
                      placeholder="구독 신청의 경우 '뉴스레터 구독 신청'이라고 적어주시고, 문의사항이 있으시면 자세히 적어주세요."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-newsletter-accent hover:bg-newsletter-accent/90 text-primary-foreground"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    메시지 전송
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <section className="mt-component">
          <Card className="bg-newsletter-surface-elevated border-border">
            <CardContent className="p-8 text-center">
              <h3 className="text-h3 font-bold text-newsletter-text-primary mb-4">
                Newsletter 구독 혜택
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="w-12 h-12 bg-newsletter-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-foreground text-xl">📧</span>
                  </div>
                  <h4 className="font-semibold text-newsletter-text-primary mb-2">
                    주간 디제스트
                  </h4>
                  <p className="text-newsletter-text-secondary">
                    매주 엄선된 개발 소식과 트렌드를 정리해서 전달
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-newsletter-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-foreground text-xl">💎</span>
                  </div>
                  <h4 className="font-semibold text-newsletter-text-primary mb-2">
                    독점 콘텐츠
                  </h4>
                  <p className="text-newsletter-text-secondary">
                    구독자만을 위한 심화 가이드와 실무 팁 제공
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-newsletter-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-primary-foreground text-xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-newsletter-text-primary mb-2">
                    맞춤 추천
                  </h4>
                  <p className="text-newsletter-text-secondary">
                    개발자 레벨과 관심사에 맞는 콘텐츠 큐레이션
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;