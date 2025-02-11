import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, type LucideIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

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
          <li key={index as number}>
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

const socialLinks = [
  { icon: Facebook, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: Instagram, href: '#' },
]

export function Footer() {
  const { t } = useTranslation()
  
  const menuItems = [
    { label: t('Footer.menu.uzmallexpo'), href: '#' },
    { label: t('Footer.menu.contact'), href: '#' },
  ]

  const quickLinks = [
    { label: t('Footer.quickLinks.privacy'), href: '#' },
    { label: t('Footer.quickLinks.terms'), href: '#' },
    { label: t('Footer.quickLinks.cookies'), href: '#' },
  ]

  const contactInfo = [
    { icon: MapPin, text: t('Footer.contact.address') },
    { icon: Phone, text: t('Footer.contact.phone') },
    { icon: Mail, text: t('Footer.contact.email') },
  ]

  return (
    <footer className="bg-[#eaeaea] text-[#095d66] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div key={index as number} className="flex items-center gap-2">
                <item.icon className="w-5 h-5" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <FooterSection title={t('Footer.sections.menu')} items={menuItems} />
          <FooterSection title={t('Footer.sections.quickLinks')} items={quickLinks} />
          <div>
            <h3 className="text-[#15bacc] font-semibold text-lg mb-4">{t('Footer.sections.followUs')}</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <FooterSocialLink key={index as number} icon={link.icon} href={link.href} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#15bacc]/20 text-center">
          <p>{t('Footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}