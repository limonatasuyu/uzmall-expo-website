import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, LucideIcon } from 'lucide-react'

interface FooterSectionProps {
  title: string
  items: { label: string; href: string }[]
}

function FooterSection({ title, items }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-[#15bacc] font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href} className="hover:text-[#15bacc] transition-colors">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface FooterSocialLinkProps {
  icon: LucideIcon
  href: string
}

function FooterSocialLink({ icon: Icon, href }: FooterSocialLinkProps) {
  return (
    <a href={href} className="hover:text-[#15bacc] transition-colors">
      <Icon className="w-6 h-6" />
    </a>
  )
}

const menuItems = [
  { label: 'О нас', href: '#' },
  { label: 'Услуги', href: '#' },
  { label: 'Свяжитесь с нами', href: '#' },
]

const quickLinks = [
  { label: 'Политика конфиденциальности', href: '#' },
  { label: 'Условия использования', href: '#' },
  { label: 'Политика использования файлов cookie', href: '#' },
]

const contactInfo = [
  { icon: MapPin, text: 'UZBEKISTAN/TASHKENT' },
  { icon: Phone, text: '+998 90 806 58 66' },
  { icon: Mail, text: 'info@uzmallexpo.uz' },
]

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-[#095d66] text-[#eaeaea] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <item.icon className="w-5 h-5" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <FooterSection title="Меню" items={menuItems} />
          <FooterSection title="Быстрые Ссылки" items={quickLinks} />
          <div>
            <h3 className="text-[#15bacc] font-semibold text-lg mb-4">Следите За Нами</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <FooterSocialLink key={index} icon={link.icon} href={link.href} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#15bacc]/20 text-center">
          <p>© 2025 uzmallEXPO. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}