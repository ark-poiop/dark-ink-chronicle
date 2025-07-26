import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import CategoryFilter from "@/components/CategoryFilter";
import { blogPosts } from "@/data/blog-posts";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Posts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto max-w-6xl px-4 py-section">
        {/* Enhanced Page Header */}
        <section className="text-center mb-component">
          <h1 className="text-h1 font-bold text-newsletter-text-primary mb-4">
            모든 아티클
          </h1>
          <p className="text-lg text-newsletter-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            개발에 관한 다양한 주제의 글들을 탐색해보세요. 
            카테고리별로 분류하거나 검색을 통해 원하는 내용을 빠르게 찾을 수 있습니다.
          </p>
          
          {/* Enhanced Search */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-newsletter-text-muted" />
              <Input
                type="text"
                placeholder="제목, 내용, 작성자, 태그로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="
                  pl-10 h-12
                  bg-newsletter-surface 
                  border-border 
                  text-newsletter-text-primary 
                  placeholder:text-newsletter-text-muted
                  focus:border-newsletter-accent
                  focus:ring-newsletter-accent/20
                  transition-all duration-200
                "
              />
            </div>
          </div>

          {/* Category Filter */}
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </section>

        {/* Posts Grid */}
        <section>
          {filteredPosts.length > 0 ? (
            <>
              <div className="mb-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <p className="text-newsletter-text-secondary">
                    {searchTerm || selectedCategory !== "all"
                      ? `검색 결과: ${filteredPosts.length}개의 글`
                      : `총 ${filteredPosts.length}개의 글`
                    }
                  </p>
                  
                  {(searchTerm || selectedCategory !== "all") && (
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("all");
                      }}
                      className="text-newsletter-accent hover:text-newsletter-accent-soft text-sm transition-colors"
                    >
                      필터 초기화
                    </button>
                  )}
                </div>
              </div>
              
              <div className="space-y-6">
                {filteredPosts.map((post, index) => (
                  <div 
                    key={post.id} 
                    className="animate-slide-up" 
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <PostCard post={post} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-newsletter-surface rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-newsletter-text-muted" />
              </div>
              <h3 className="text-xl font-semibold text-newsletter-text-primary mb-3">
                검색 결과가 없습니다
              </h3>
              <p className="text-newsletter-text-secondary mb-6 max-w-md mx-auto">
                {searchTerm 
                  ? `"${searchTerm}"에 대한 검색 결과가 없습니다. 다른 키워드로 검색해보세요.`
                  : "선택한 카테고리에 글이 없습니다. 다른 카테고리를 선택해보세요."
                }
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="
                  px-6 py-3 rounded-lg
                  bg-newsletter-accent text-primary-foreground
                  hover:bg-newsletter-accent/90
                  transition-all duration-200
                "
              >
                전체 글 보기
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Posts;