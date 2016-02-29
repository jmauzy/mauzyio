class MailerController < ApplicationController

  def submit_contact_form
    name = params[:name]
    email = params[:email]
    phone = params[:phone]
    comment = params[:comment]
    mail = ContactMailer.contact(name, email, phone, comment)
    mail.deliver
    redirect_to root_path
  end
end

