from flask import render_template, request, jsonify
from app import app
from app.program import Program

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        program = Program(request.form.getlist('data[]'), request.form['extension'])
        program.compile()
        return jsonify({'output': program.run()})
    return render_template("index.html")
