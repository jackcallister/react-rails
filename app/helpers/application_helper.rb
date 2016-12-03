module ApplicationHelper
  def react_component(component, props = {})
    html_attributes = {
      'data-react': true,
      'data-react-props': props.to_json,
      'data-react-component': component
    }

    content_tag(:div, '', html_attributes)
  end
end
