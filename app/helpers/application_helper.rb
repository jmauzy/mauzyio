module ApplicationHelper

  def posted_date date
    date.strftime("Posted %b %e, %Y")
  end

end
