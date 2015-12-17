class PostsController < ApplicationController
  before_action :authenticate_admin!, except: [:show]

  def show
    @post = Post.find(params[:id])
  end
  
  def create
    @post = Post.new(post_params)
    if @post.save
      flash[:success] = "Post Created!"
    else
      flash[:error] = "Something Went Wrong"
    end
    redirect_to :back
  end

  private
    
    def post_params
      params.require(:post).permit(:title, :description, :body)
    end
end
