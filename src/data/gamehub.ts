export type Game = {
  slug: string; name: string; platform: "Mobile" | "PC/Console"; genre: string;
  description: string; developer: string; publisher: string; status: string;
  icon: string; cover: string; hero: string; trailer?: string;
  featured?: boolean; hot?: boolean; updated?: string; tags: string[];
  aliases?: string[]; website?: string;
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
  ,
  {
    slug: "free-fire", name: "Free Fire", platform: "Mobile", genre: "Battle Royale, Sinh tồn",
    description: "Tựa game sinh tồn bắn súng battle royale trên di động do Garena phát hành.",
    developer: "111dots Studio", publisher: "Garena", status: "Đang phát hành",
    icon: "https://i.ibb.co/tT8tbz3j/logo-m-lq.webp",
    cover: "https://i.ibb.co/fdV3H1SL/thumb-m-lq.webp",
    hero: "https://i.ibb.co/fdV3H1SL/thumb-m-lq.webp",
    website: "https://ff.garena.vn",
    aliases: ["Garena Free Fire"],
    tags: ["Battle Royale", "Sinh tồn", "Shooter"]
  },
  {
    slug: "lien-quan-mobile", name: "Liên Quân Mobile", platform: "Mobile", genre: "MOBA",
    description: "Game MOBA 5v5 trên di động của TiMi Studio Group, do Garena phát hành tại Việt Nam.",
    developer: "TiMi Studio Group", publisher: "Garena", status: "Đang phát hành",
    icon: "https://i.ibb.co/tT8tbz3j/logo-m-lq.webp",
    cover: "https://i.ibb.co/fdV3H1SL/thumb-m-lq.webp",
    hero: "https://i.ibb.co/fdV3H1SL/thumb-m-lq.webp",
    website: "https://lienquan.garena.vn",
    aliases: ["Liên Quân", "Arena of Valor", "AOV"],
    tags: ["MOBA", "5v5", "Mobile"]
  },
  {
    slug: "monster-hunter-wilds", name: "Monster Hunter Wilds", platform: "PC/Console", genre: "Hành động, Nhập vai, Săn quái vật",
    description: "Tựa game săn quái vật của Capcom, người chơi vào vai Hunter khám phá vùng đất hoang dã và săn lùng những quái vật khổng lồ cùng đồng đội.",
    developer: "Capcom", publisher: "Capcom", status: "Đang phát hành",
    icon: "https://i.ibb.co/ch9VqpgY/mhw-icon-250.webp",
    cover: "https://i.ibb.co/QvXTn9z7/mhw-thumb.webp",
    hero: "https://i.ibb.co/QvXTn9z7/mhw-thumb.webp",
    website: "https://www.monsterhunter.com/wilds/",
    aliases: ["MHWilds", "MH Wilds"],
    tags: ["Action", "RPG", "Co-op", "Monster Hunting"]
  },
  {
    slug: "call-of-duty-modern-warfare-4", name: "Call of Duty: Modern Warfare 4", platform: "PC/Console", genre: "FPS, Bắn súng",
    description: "Game bắn súng góc nhìn thứ nhất do Infinity Ward phát triển, Activision phát hành.",
    developer: "Infinity Ward", publisher: "Activision", status: "Đã phát hành",
    icon: "https://i.ibb.co/gb4CTBWd/gamehub2-call-of-duty-modern-warfare-4-icon.webp",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimqM5ZfD6q33NmBooLN9OTvohAz3N_mdt5BnBbIiShdFXIlfbwX1SN54tnqBPbEl59Knt4Ta6BS_XBgFW6cdaYvBRtJwJvLNshs3bwsZk8Ly7V_CAkzSyKqNuMy0ebu7gjlowD2vWB3C89z-E4WLzwI1n_mp_FZXZxnWsvY1on4voN11awZ1v_fxc1cEk/s1600/mw4-cover.webp",
    hero: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimqM5ZfD6q33NmBooLN9OTvohAz3N_mdt5BnBbIiShdFXIlfbwX1SN54tnqBPbEl59Knt4Ta6BS_XBgFW6cdaYvBRtJwJvLNshs3bwsZk8Ly7V_CAkzSyKqNuMy0ebu7gjlowD2vWB3C89z-E4WLzwI1n_mp_FZXZxnWsvY1on4voN11awZ1v_fxc1cEk/s1600/mw4-cover.webp",
    website: "https://www.callofduty.com/modern-warfare-4",
    aliases: ["CoD MW4", "Modern Warfare 4"],
    tags: ["FPS", "Shooter", "Action"]
  },
  {
    slug: "attack-on-titan-3", name: "Attack on Titan 3", platform: "PC/Console", genre: "Hành động, Phiêu lưu",
    description: "Phần tiếp theo của series game Attack on Titan từ Omega Force, lần đầu tiên kể trọn câu chuyện từ những ngày đầu của Trinh Sát Đoàn tới đoạn kết.",
    developer: "Omega Force", publisher: "Koei Tecmo", status: "Sắp phát hành",
    icon: "https://i.ibb.co/Zy8v3Nn/aot3-icon-250.webp",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEil3cdpmn7ldUUHAxKWkvg8J12Az_RhcHHhVYQPVie7p6-G_OqFCcRNDzav6NMdwk1Bf8q82gHBk6uQsnkxQQx7Ck9UVmtbLpebtDAp7EmrsApll4676nahjDD1RbSxn-vr38JlKcqYYuJvGSXEZ_sa5c6Hoz4L1dF5wLXDOrffGbgGhfczTUYY31wZNqo/s1600/aot3-thumb-750.webp",
    hero: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEil3cdpmn7ldUUHAxKWkvg8J12Az_RhcHHhVYQPVie7p6-G_OqFCcRNDzav6NMdwk1Bf8q82gHBk6uQsnkxQQx7Ck9UVmtbLpebtDAp7EmrsApll4676nahjDD1RbSxn-vr38JlKcqYYuJvGSXEZ_sa5c6Hoz4L1dF5wLXDOrffGbgGhfczTUYY31wZNqo/s1600/aot3-thumb-750.webp",
    website: "https://www.koeitecmoamerica.com/attackontitan3/us/",
    aliases: ["A.O.T. 3", "AoT3"],
    tags: ["Action", "Adventure", "Anime"]
  }

];

export const getGame = (slug: string) => games.find((game) => game.slug === slug);
