import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Behind the Story: Covering Community Infrastructure",
    excerpt: "What goes into investigating municipal projects and making complex budget decisions accessible to readers.",
    date: "January 2026",
    readTime: "5 min read",
    category: "Process"
  },
  {
    id: 2,
    title: "The Art of the Interview",
    excerpt: "Lessons learned from years of interviewing community members and public officials.",
    date: "December 2025",
    readTime: "4 min read",
    category: "Craft"
  },
  {
    id: 3,
    title: "Why Local Journalism Matters",
    excerpt: "Reflections on the importance of community storytelling in an era of national news dominance.",
    date: "November 2025",
    readTime: "6 min read",
    category: "Opinion"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b-4 border-[#D6B98C] z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-[#1F2933]">
            Jacob Barker
          </Link>
          <div className="flex gap-8">
            <Link href="/showreel" className="text-gray-700 hover:text-[#D6B98C] transition-colors font-medium">
              Showreel
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-[#D6B98C] transition-colors font-medium">
              Projects
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#D6B98C] transition-colors font-medium">
              About
            </Link>
            <Link href="/blog" className="text-[#1F2933] font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#D6B98C] transition-colors font-medium">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-[#1F2933] mb-4">Blog</h1>
          <p className="text-xl text-gray-600 mb-12">
            Thoughts on journalism, storytelling, and community reporting
          </p>

          {/* Blog Posts */}
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="px-3 py-1 bg-[#D6B98C] text-white rounded font-medium text-xs tracking-wider shadow-sm">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-[#1F2933] mb-3 hover:text-[#D6B98C] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                <span className="text-[#D6B98C] font-medium hover:underline">
                  Read more →
                </span>
              </article>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-12">
            <h3 className="text-xl font-bold text-[#1F2933] mb-3">More Posts Coming Soon</h3>
            <p className="text-gray-600">
              Subscribe to get notified when I publish new articles about journalism and storytelling.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Jacob Barker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
