source "https://rubygems.org"

# Documents the exact gem set GitHub Pages uses for its legacy build
# (Jekyll 3.10.0, Liquid 4.0.4, github-pages 232). GitHub Pages itself reads
# this file, so the version constraint must stay satisfiable on the server —
# do not add gems that conflict with it.
#
# Local note: `bundle install` needs Ruby 3.1–3.3. github-pages 232 pins
# jekyll-sass-converter 1.5.2 (sass ~> 3.4, last released 2019), which does not
# run on Ruby 3.4/4.0. Use Docker (ruby:3.1) or `brew install ruby@3.1`.
gem "github-pages", "~> 232", group: :jekyll_plugins

# Faraday 2.x needs this adapter; without it some plugins warn during build.
gem "faraday-retry", "~> 2.3"

# Ruby 3.0 removed webrick from the standard library and `jekyll serve` needs it.
gem "webrick", "~> 1.9"
