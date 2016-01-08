class StaticPagesController < ApplicationController
  
  def index
    @posts = Post.last(10).reverse
  end

  def about
  end

  def contact
  end

end
