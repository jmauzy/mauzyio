class ContactMailer < ActionMailer::Base
  default from: "jeremy@mauzy.io"
  layout 'mailer'

  def contact(name, email, phone, comment)
      @name = name
      @email = email
      @phone = phone
      @comment = comment
    mail(
      :subject => 'Contact form submission from #{name}',
      :to => 'jeremymauzy@gmail.com',
    )
  end
end
