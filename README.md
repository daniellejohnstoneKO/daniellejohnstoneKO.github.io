# Search oral histories

This was a project for the Heritage Science Hackathon in London 2019. 
Eastside Coommunity Heritage has an enormous archive of oral histories. Our aim was to give access to the public, while keeping costs to teh organisation minimal. 
We also wanted ECH to be able to retain control over their media, so that they could charge for corporate use. 
We decided to put the transcripts online as a compromise between retaining control and allowing access. The transcripts are searchable. If someone wants the audio media itslef, they can complete a form to request it. 
The result can simply be added to the existing organisation website. 

<h2> How to use</h2>

1. Convert all transcript files from .docx to html. You can do this manually in Microsoft Word, by saving as a webpage. To do this for a batch, use the following bash from the folder containing transripts:

          for f in */*.docx; #list all the .docx files 
            do mkdir -p html_transcripts/${f%/*}; #create appropriate subfolder
            pandoc -t html -o  "./html_transcripts/${f/%docx/html}" "${f}";#convert files to html
          done

2. Combine all the html docs into one html file. You can do this using the compile_transcripts.py file. 

3. Copy the html into index.html, in the div with class "content". 

4. Create a request form with your chosen software (we recommend using Google Forms). Add the form url to the button with class "request" and to the hyperlink in the paragraph. 

5. Search all your transcripts! 
