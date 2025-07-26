import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import { blogPosts } from "@/data/blog-posts";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Posts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto max-w-6xl px-4 py-section">
        {/* Page Header */}
        <section className="text-center mb-component">
          <h1 className="text-h1 font-bold text-newsletter-text-primary mb-4">
            모든 글
          </h1>
          <p className="text-lg text-newsletter-text-secondary mb-8 max-w-2xl mx-auto">
            개발에 관한 다양한 주제의 글들을 탐색해보세요. 
            검색을 통해 원하는 내용을 빠르게 찾을 수 있습니다.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto">
            <Input
              type="text"
              placeholder="글 제목, 내용, 작성자로 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                bg-newsletter-surface 
                border-border 
                text-newsletter-text-primary 
                placeholder:text-newsletter-text-secondary
                focus:border-newsletter-accent
                focus:ring-newsletter-accent
              "
            />
          </div>
        </section>

        {/* Posts Grid */}
        <section>
          {filteredPosts.length > 0 ? (
            <>
              <div className="mb-6">
                <p className="text-newsletter-text-secondary">
                  {searchTerm 
                    ? `"${searchTerm}" 검색 결과: ${filteredPosts.length}개의 글`
                    : `총 ${filteredPosts.length}개의 글`
                  }
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-newsletter-surface rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-newsletter-text-secondary text-2xl">📝</span>
              </div>
              <h3 className="text-lg font-semibold text-newsletter-text-primary mb-2">
                검색 결과가 없습니다
              </h3>
              <p className="text-newsletter-text-secondary">
                다른 키워드로 검색해보시거나 전체 글을 둘러보세요.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Posts;