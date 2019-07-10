class Api::CategoriesController < ApplicationController
	def index
		@categories = Category.all
	end

	def show
		@category = Category.find(params[:id])
	end

	def category_params
		params.require(:category).permit(:title, :description)
	end
end
