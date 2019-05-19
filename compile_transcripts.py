import pathlib
root = pathlib.Path("./html_transcripts")
folders = [x for x in root.iterdir() if x.is_dir() and not str(x).startswith('.')]
#overwrite original file
with open("complete.html", "w"):
    pass

#for each folder of transcripts read in the transcript and copy it to the complete.html file
for folder in folders:
    files = [x for x in folder.iterdir() if x.suffix == '.html']
    for file in files:
        open_file = file.open()
        text = "\n".join(open_file.readlines())
        with open("complete.html", "a") as myfile:
            location_of_first_open_p = text.find("<p>")
            location_of_first_closed_p = text.find("</p>")
            header = "<h2>"+text[location_of_first_open_p+3:location_of_first_closed_p]+"</h2>"
            myfile.write(header)
            myfile.write(text)