from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        slider_value = request.form.get('slider')
        print(f'Slider value: {slider_value}')
        return 'Success', 200
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
