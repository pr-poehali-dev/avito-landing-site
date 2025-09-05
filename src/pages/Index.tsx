import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "TrendingUp",
      title: "Продвижение на Авито",
      description: "Увеличиваем видимость и продажи через платформу Авито"
    },
    {
      icon: "Search",
      title: "SEO Яндекс",
      description: "Комплексная оптимизация для поисковых систем"
    },
    {
      icon: "Target",
      title: "Контекстная реклама",
      description: "Эффективные рекламные кампании с высокой конверсией"
    },
    {
      icon: "BarChart",
      title: "Аналитика и отчёты",
      description: "Детальный анализ эффективности продвижения"
    }
  ];

  const team = [
    {
      name: "Алексей Иванов",
      role: "Senior Авито-специалист",
      experience: "5+ лет"
    },
    {
      name: "Мария Петрова",
      role: "SEO эксперт",
      experience: "4+ года"
    },
    {
      name: "Дмитрий Сидоров",
      role: "Контекстолог",
      experience: "6+ лет"
    }
  ];

  const portfolio = [
    { client: "Мебельная компания", result: "+350% продаж", period: "6 мес" },
    { client: "Автосалон", result: "+200% лидов", period: "4 мес" },
    { client: "Интернет-магазин", result: "+180% трафика", period: "8 мес" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              🚀 Профессиональное продвижение
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-black bg-clip-text text-transparent">
              НаВерх
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Агентство digital-маркетинга, специализирующееся на продвижении в Авито и Яндексе. 
              Поднимаем ваш бизнес на новый уровень.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть кейсы
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-yellow-200 to-transparent rounded-full blur-3xl opacity-30 animate-float"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексные решения для эффективного продвижения вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-yellow-50/50">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-yellow-500 to-black rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-gray-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-4xl font-bold">О нашем агентстве</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                НаВерх — это команда профессионалов с более чем 5-летним опытом работы в сфере 
                digital-маркетинга. Мы специализируемся на продвижении в Авито и поисковых системах Яндекса.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">150+</div>
                  <div className="text-sm text-gray-600">Успешных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">98%</div>
                  <div className="text-sm text-gray-600">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">5+</div>
                  <div className="text-sm text-gray-600">Лет на рынке</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/95bd9c62-280d-4528-a765-157b17b1dff5.jpg" 
                alt="О компании НаВерх" 
                className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-gray-600">Результаты, которые говорят сами за себя</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-yellow-50">
                <CardContent className="pt-8">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">{project.result}</div>
                  <div className="text-lg font-semibold mb-2">{project.client}</div>
                  <div className="text-gray-600">{project.period}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-100 to-yellow-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Наша команда</h2>
            <p className="text-xl text-gray-600">Профессионалы, которые делают результат</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-black rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-yellow-600 font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{member.experience}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-500 to-black">
        <div className="container mx-auto text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold text-white mb-6">Готовы подняться НаВерх?</h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами сегодня и получите бесплатную консультацию по продвижению вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <div className="flex items-center gap-3 text-white">
                <Icon name="Phone" size={24} />
                <span className="text-lg">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Icon name="Mail" size={24} />
                <span className="text-lg">info@naverh.ru</span>
              </div>
              <a 
                href="https://t.me/naverh_agency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-yellow-200 transition-colors"
              >
                <Icon name="Send" size={24} />
                <span className="text-lg">Telegram канал</span>
              </a>
              <div className="flex items-center gap-3 text-white">
                <Icon name="MapPin" size={24} />
                <span className="text-lg">Москва</span>
              </div>
            </div>
            <Button 
              size="lg" 
              variant="secondary" 
              className="px-12 py-4 text-lg font-semibold hover:scale-105 transition-transform"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-center">
        <p className="text-gray-400">© 2024 НаВерх. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;