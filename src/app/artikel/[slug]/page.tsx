import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ARTICLES } from "@/constants/articles";
import { ArticleDetailView } from "@/components/articles/ArticleDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan | Banyumili Agro Export",
      description: "Artikel yang Anda cari tidak tersedia.",
    };
  }

  return {
    title: `${article.title} | Banyumili Agro Export`,
    description: article.summary,
    openGraph: {
      title: `${article.title} | Banyumili Agro Export`,
      description: article.summary,
      images: [
        {
          url: article.thumbnail,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArtikelPage({ params }: PageProps) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <ArticleDetailView article={article} relatedArticles={relatedArticles} />
      <Footer />
    </>
  );
}
