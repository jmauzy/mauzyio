class MailerController < ApplicationController
  layout "application"

  def submit_contact_form
    name = params[:name]
    email = params[:email]
    phone = params[:phone]
    comment = params[:comment]
    mail = ContactMailer.contact(name, email, phone, comment)
    mail.deliver
  end
end

