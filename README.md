# SurVis - Visual Literature Browser

![Screenshot](/doc/survis.png)

SurVis is a flexible online browser to present and analyze scientific literature. The system is made for authors of survey articles, theses, or books who want to share their references in a user-friendly way. All you need to start is a bib file and a list of keywords for your papers.

To start SurVis, open 'src/index.html' in your browser.

The bibliography data is stored in 'bib/references.bib' in BibTeX format.

Supplemental data is contained in 'src/data/':
* 'tag_categories.js': list of special tag categories; they can be used as a prefix for the tags and appear, for instance, 'a:b' refers to tag 'b' in tag category 'a'
* 'authorized_tags.js': tags that are defined through a description (highlighted in SurVis, description appears as a tooltip)
* 'search_stopwords.js': a list of stopwords used to exclude terms from search queries
* 'papers_pdf' (optional): PDF files of the papers, please use the BibTeX id as a file name
* 'papers_img' (optional): PNG thumbnails for the papers, please use the BibTeX id as a file name

## Learn more

In this survis project, we entered 11 papers as the references of Literature Review.
