class ContactMailer < ActionMailer::Base
  default from: "contact@mauzy.io"

  def contact
    mail(
      :subject => 'Contact form submission',
      :to => 'jeremymauzy@gmail.com',
      :tag => 'contact'
    )
  end
end
