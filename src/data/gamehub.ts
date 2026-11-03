export type Game = {
  slug: string; name: string; platform: "Mobile" | "PC/Console"; genre: string;
  description: string; developer: string; publisher: string; status: string;
  icon: string; cover: string; hero: string; trailer?: string;
  featured?: boolean; hot?: boolean; updated?: string; tags: string[];
};

export const games: Game[] = [
  {
    slug: "wuthering-waves", name: "Wuthering Waves", platform: "Mobile", genre: "Action RPG",
    description: "Khám phá thế giới hậu tận thế rộng lớn, làm chủ hệ thống chiến đấu tốc độ cao và đồng hành cùng những Resonator trong hành trình tìm lại ký ức.",
    developer: "Kuro Games", publisher: "Kuro Games", status: "Đang phát hành",
    icon: "https://cdn.cloudflare.steamstatic.com/steam/apps/3513350/library_600x900.jpg",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/3513350/header.jpg",
    hero: "https://cdn.cloudflare.steamstatic.com/steam/apps/3513350/library_hero.jpg",
    featured: true, hot: true, tags: ["Action", "Open World", "Anime"]
  },
  {
    slug: "genshin-impact", name: "Genshin Impact", platform: "Mobile", genre: "Open-world RPG",
    description: "Bước vào Teyvat, tự do khám phá bảy vùng đất, xây dựng đội hình nhân vật và trải nghiệm những câu chuyện fantasy.",
    developer: "HoYoverse", publisher: "HoYoverse", status: "Đang phát hành",
    icon: "https://cdn.cloudflare.steamstatic.com/steam/apps/0/header.jpg",
    cover: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",
    hero: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=90",
    featured: true, hot: true, tags: ["RPG", "Anime", "Open World"]
  },
  {
    slug: "zenless-zone-zero", name: "Zenless Zone Zero", platform: "Mobile", genre: "Action RPG",
    description: "Một thành phố đô thị giả tưởng với nhịp chiến đấu hành động nhanh, phong cách đồ họa cá tính và dàn nhân vật độc đáo.",
    developer: "HoYoverse", publisher: "HoYoverse", status: "Đang phát hành",
    icon: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=300&q=85",
    cover: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=900&q=85",
    hero: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=1800&q=90",
    hot: true, tags: ["Action", "Anime"]
  },
  {
    slug: "pubg-mobile", name: "PUBG Mobile", platform: "Mobile", genre: "Battle Royale",
    description: "Sinh tồn trên chiến trường rộng lớn, phối hợp cùng đồng đội và trở thành đội cuối cùng còn trụ lại.",
    developer: "LightSpeed Studios", publisher: "Level Infinite", status: "Đang phát hành",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=300&q=85",
    cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=85",
    hero: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1800&q=90",
    hot: true, tags: ["Shooter", "Battle Royale"]
  },
  {
    slug: "black-myth-wukong", name: "Black Myth: Wukong", platform: "PC/Console", genre: "Action RPG",
    description: "Action RPG lấy cảm hứng từ Tây Du Ký, đưa người chơi vào hành trình của Thiên Mệnh Nhân qua thế giới thần thoại phương Đông.",
    developer: "Game Science", publisher: "Game Science", status: "Đã phát hành",
    icon: "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/library_600x900.jpg",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/header.jpg",
    hero: "https://cdn.cloudflare.steamstatic.com/steam/apps/2358720/library_hero.jpg",
    featured: true, hot: true, tags: ["Action RPG", "Soulslike"]
  },
  {
    slug: "elden-ring", name: "Elden Ring", platform: "PC/Console", genre: "Action RPG",
    description: "Khám phá Vùng Đất Giữa trong một thế giới fantasy rộng lớn, nơi mỗi hành trình đều mở ra thử thách và bí mật mới.",
    developer: "FromSoftware", publisher: "Bandai Namco", status: "Đã phát hành",
    icon: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_600x900.jpg",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
    hero: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/library_hero.jpg",
    featured: true, tags: ["Action RPG", "Soulslike", "Open World"]
  },
  {
    slug: "cyberpunk-2077", name: "Cyberpunk 2077", platform: "PC/Console", genre: "Open-world RPG",
    description: "Đắm chìm trong Night City, thành phố tương lai nơi công nghệ, quyền lực và những lựa chọn cá nhân đan xen.",
    developer: "CD PROJEKT RED", publisher: "CD PROJEKT RED", status: "Đã phát hành",
    icon: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_600x900.jpg",
    cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
    hero: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_hero.jpg",
    hot: true, tags: ["RPG", "Open World", "Sci-fi"]
  },
  {
    slug: "valorant", name: "VALORANT", platform: "PC/Console", genre: "Tactical FPS",
    description: "Game bắn súng chiến thuật 5v5, kết hợp kỹ năng đặc vụ và lối chơi đặt bom đòi hỏi phối hợp chính xác.",
    developer: "Riot Games", publisher: "Riot Games", status: "Đang phát hành",
    icon: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=300&q=85",
    cover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=85",
    hero: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1800&q=90",
    hot: true, tags: ["FPS", "Competitive", "Shooter"]
  }
];

export const getGame = (slug: string) => games.find((game) => game.slug === slug);
