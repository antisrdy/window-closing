import window_closing
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = html.Div([
    window_closing.Alert(id='alert')
])

if __name__ == '__main__':
    app.run_server(debug=True)
