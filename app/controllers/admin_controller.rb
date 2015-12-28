class AdminController < ApplicationController
  before_action :authenticate_admin!
  layout 'admin'
  def index
    @posts = Post.all.reverse
  end

  def new
    @post = Post.new
  end

  

end


