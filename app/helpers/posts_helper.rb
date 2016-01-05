module PostsHelper

  def markdown(text)
    options = {
      filter_html:          true,
      hard_wrap:            true,
      link_attributes:      { rel: 'nofollow', target: "_blank" },
      space_after_headers:  true,
      fenced_code_blocks:   true,
    }

    extensions = {
      autolink:             false,
      superscript:          true,
      disable_indented_code_blocks: true  
    }

    renderer = Redcarpet::Render::HTML.new(options)
    markdown = Redcarpet::Markdown.new(renderer, extensions)

    markdown.render(text).html_safe
  end

  def popular_posts
    Post.order(views: :desc).limit(5).select([:title, :slug, :views])
  end

end
